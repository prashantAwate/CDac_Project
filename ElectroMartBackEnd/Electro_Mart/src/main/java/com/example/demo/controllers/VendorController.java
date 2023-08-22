package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.Vendor;
import com.example.demo.entities.VendorReg;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.VendorService;

@RestController
public class VendorController {
	
	@Autowired
	VendorService vservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	
	
	@PostMapping("/regVendor")
	public Vendor regVendor(@RequestBody VendorReg vr)
	{
		Role r=rservice.getRole(2);
		Login l=new Login(vr.getFname(), vr.getLname(), vr.getUsername(), vr.getPassword(), vr.getContact_no(), vr.getEmail(), vr.getAddress(), vr.getCity(), true, 0, r);
		
		Login saved = lservice.saveLogin(l);
		
		Vendor vsave=new Vendor(vr.getShop_name(),vr.getShopact_licence(), vr.getAadhar(), saved);
		
		return vservice.saveVendor(vsave);
		
	}
	
	
	
	

}
