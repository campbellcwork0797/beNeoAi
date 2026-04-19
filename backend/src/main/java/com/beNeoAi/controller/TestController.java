package com.beNeoAi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/hello")
    public String hello() {
        System.out.println("Success 200");
        return "Hello world";
    }


    @GetMapping("/hi")
    public String hi() {
        System.out.println("Success 200");
        return "Hi";
    }
    
}