// main.go

package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type User struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Surname     string `json:"surname"`
	Nickname    string `json:"nickname"`
	Age         int    `json:"age"`
	Sex         string `json:"sex"`
	Email       string `json:"email"`
	PhoneNumber string `json:"phone_number"`
	Address     string `json:"address"`
}

var users = []User{
	{1, "John", "Doe", "Johnny", 30, "Male", "john.doe@example.com", "123-456-7890", "123 Main St"},
	{2, "Jane", "Smith", "Janey", 25, "Female", "jane.smith@example.com", "234-567-8901", "456 Oak St"},
	{3, "Michael", "Brown", "Mike", 40, "Male", "michael.brown@example.com", "345-678-9012", "789 Pine St"},
	{4, "Emily", "Davis", "Em", 22, "Female", "emily.davis@example.com", "456-789-0123", "101 Maple St"},
	{5, "Daniel", "Wilson", "Dan", 35, "Male", "daniel.wilson@example.com", "567-890-1234", "202 Birch St"},
	{6, "Sophia", "Taylor", "Sophie", 28, "Female", "sophia.taylor@example.com", "678-901-2345", "303 Elm St"},
	{7, "James", "Anderson", "Jim", 33, "Male", "james.anderson@example.com", "789-012-3456", "404 Cedar St"},
	{8, "Olivia", "Thomas", "Liv", 27, "Female", "olivia.thomas@example.com", "890-123-4567", "505 Walnut St"},
	{9, "David", "Jackson", "Dave", 45, "Male", "david.jackson@example.com", "901-234-5678", "606 Spruce St"},
	{10, "Isabella", "Martin", "Bella", 19, "Female", "isabella.martin@example.com", "012-345-6789", "707 Aspen St"},
}

func getUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if r.Method == "OPTIONS" {
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/users", getUsers).Methods("GET")

	// Wrap the router with CORS middleware
	handler := enableCORS(router)

	log.Println("Server is running on port 8000")
	log.Fatal(http.ListenAndServe(":8000", handler))
}
