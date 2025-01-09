package routes

import (
	"github.com/labstack/echo/v4"
)

func HealthCheck(context echo.Context) error {
	return context.JSON(200, "Statuc OK")
}