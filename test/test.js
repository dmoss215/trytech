var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("TryTech", function() {
	
	this.timeout(5000);

	it("should go to the home page click the 'categories' button and select the dropdown of 'laptops/computers'", function(done) {
		Nightmare({show: true})
			// .goto("https://insert-weird-heroku-name-here.herokuapp.com")
			.goto("localhost:3080/")
			.wait(1000)
			.click("#dropdownMenuButton")
			.wait(500)
			.select(".dropdown-item", "laptops/computers")
			.evaluate(function() {
				return document.querySelector(".card-title");
			})
			.end()
			.then(function(result) {
				console.log(result);
				expect(result[0]).to.equal("Apple - MacBook Pro");
			})
			.catch(function(error) {
    		console.error("Search failed:", error);
			})
		});

		it("should go to the manager portal, click on 'View hired items'", function(done) {
		Nightmare({show: true})
			// .goto("https://insert-weird-heroku-name-here.herokuapp.com/manager")
			.goto("localhost:3080/manager/")
			.wait(1000)
			.click("a[href='/manager/3'")
			.wait(500)
			.evaluate(function() {
				return document.querySelector(".page-header");
			})
			.end()
			.then(function(result) {
				console.log(result);
				expect(result).to.equal("View all hired items");
			})
			.catch(function(error) {
    		console.error("Search failed:", error);
			})
		});

		it("should go to the home page, click the login button and login as 'John Smith' and order a Macbook Pro.", function(done) {
		Nightmare({show: true})
			// .goto("https://insert-weird-heroku-name-here.herokuapp.com")
			.goto("localhost:3080/")
			.wait(1000)
			.click(".login-btn")
			.wait(500)
			.type("input['name=\"username\"]'", "jsmith@gmail.com")
			.type("input['name=\"password\"]'", "HelloWorld")
			.wait(1000)
			.select(".dropdown-item", "laptops/computers")
			.wait(1000)
			.click("a[href='/add-to-cart/10']")
			.wait(1000)
			.click(".register-submit-btn")
			.evaluate(function() {
				return document.querySelector(".order-success-subheader");
			})
			.end()
			.then(function(result) {
				console.log(result);
				expect(result).to.equal("Thank you for your order!");
			})
			.catch(function(error) {
    		console.error("Search failed:", error);
			})
		});

	});