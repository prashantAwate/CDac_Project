package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;

@RestController
public class CustomerController {
	
	@Autowired
	CustomerService cservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	@PostMapping("/regCustomer")
	public Customer regCustomer(@RequestBody CustomerReg c)
	{
		Role r=rservice.getRole(3);
		Login l=new Login(c.getFname(),c.getLname(),c.getUsername(),c.getPassword(),c.getContact_no(),c.getEmail(),c.getAddress(),c.getCity(),true,0,r);
		
		Login saved = lservice.saveLogin(l);
		
		Customer csave=new Customer(saved);
		return cservice.saveCustomer(csave);
	}
	
}
