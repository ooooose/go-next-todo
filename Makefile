up:
	docker compose up -d
	
build:
	docker compose build

down:
	docker compose down

logs:
	docker compose lots -f back

shell:
	docker compose run --rm back bash

ps:
	docker compose ps -a
