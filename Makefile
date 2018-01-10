.PHONY: test build

default: help

new:
	node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))

del:
	node build/bin/delete.js $(filter-out $@,$(MAKECMDGOALS))

version:
	npm run version

install:
	npm run bootstrap

build-file:
	npm run build:file

build-utils:
	npm run build:utils

build-css:
	npm run build:vui-css

build-components:
	npm run build:components

build-vui:
	npm run build:vui

build-example:
	npm run build:example

deploy:
	npm run deploy

deploy-docs:
	npm run deploy:docs

dev:
	npm run dev

dist:
	npm run dist

lint:
	npm run lint

clean:
	rimraf lib && rimraf packages/*/lib

test:
	npm run test

release:
	npm run release

test-coverage:
	npm run test:coverage

test-watch:
	npm run test:watch

help:
	@echo "   \033[35m\033[0m \033[1m\033[0m"
	@echo "   \033[35mmake\033[0m \033[0m\t\033[0m\t\033[0m\t\033[0m\t\033[1m命令使用说明\033[0m"
	@echo "   \033[35m\033[0m \033[1m\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake build-file\033[0m\t\033[0m\t\033[0m\t---  入口文件打包"
	@echo "   \033[35mmake build-css\033[0m\t\033[0m\t\033[0m\t---  css打包"
	@echo "   \033[35mmake build-components\033[0m\t\033[0m\t---  组件打包"
	@echo "   \033[35mmake build-vui\033[0m\t\033[0m\t\033[0m\t---  压缩打包"
	@echo "   \033[35mmake build-example\033[0m\t\033[0m\t\033[0m\t---  生成预览文件"
	@echo "   \033[35mmake deploy\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  gp发布"
	@echo "   \033[35mmake deploy-docs\033[0m\t\033[0m\t\033[0m\t---  文档发布打包"
	@echo "   \033[35mmake dist\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  集体打包"
	@echo "   \033[35mmake clean\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  文件清理"
	@echo "   \033[35mmake test\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  unit测试"
	@echo "   \033[35mmake test-coverage\033[0m\t\033[0m\t\033[0m\t---  打开覆盖率测试页面"
	@echo "   \033[35mmake test-watch\033[0m\t\033[0m\t\033[0m\t---  监听unit测试"
	@echo "   \033[35mmake version\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  单独统一组件版本"
	@echo "   \033[35mmake release\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  发布release"
	@echo "   \033[35mmake new <component-name> [中文名]\033[0m\t---  创建新全局组件 生成对应文件  例如 'make new button '按钮'"
	@echo "   \033[35mmake del <component-name> \033[0m\t\033[0m\t---  删除组件 删除对应文件  例如 'make del button'"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  开发模式"
	@echo "   \033[35m\033[0m \033[1m\033[0m"
