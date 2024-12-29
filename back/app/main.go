package main

import (
	"todo/db"
	"todo/routes"

	"github.com/labstack/echo/v4"
)

func main() {
	db.Init()

	server := echo.New()
	routes.RegisterRoutes(server)

	server.Logger.Fatal(server.Start(":5050"))
}