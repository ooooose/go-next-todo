up:
	docker compose up -d
	
build:
	docker compose build

down:
	docker compose down

logs:
	docker compose logs api -f

shell:
	docker compose run --rm api sh

ps:
	docker compose ps -a
