frontend_dir=front-end

default:
	@echo "Escolha o comando que voce quer executar. Ex.: make check"
	@echo "Lista de comandos:"
	@echo "  * check"
	@echo "  * run"
	@echo "  * build"
	@echo "  * storybook"
	@echo "  * prettier"
	@echo "  * test"


check: check-prettier lint

lint:
	cd $(frontend_dir) && npm run lint

check-prettier:
	cd $(frontend_dir) && npx prettier . --check

run:
	cd $(frontend_dir) && npm run dev

build:
	cd $(frontend_dir) && npm run build

storybook:
	cd $(frontend_dir) && npm run storybook

prettier:
	cd $(frontend_dir) && npx prettier . --write

# test:
# 	cd $(frontend_dir) && npm run test
