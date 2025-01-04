package main

import (
	"net/http"
	"todo/db"
	"todo/routes"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	db.Init()

	server := echo.New()
	server.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowHeaders: []string{
			http.MethodGet, 
			http.MethodPost, 
			http.MethodPut, 
			http.MethodDelete, 
			"Content-Type", 
			"X-Requested-With",
		},
	}))

	routes.RegisterRoutes(server)

	server.Logger.Fatal(server.Start(":5050"))
}