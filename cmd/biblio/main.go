package main

import "html/template"

func main() {
	template.ParseGlob("templates/*.html")
}
