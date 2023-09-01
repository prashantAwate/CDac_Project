//package com.example.demo.entities;
//
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//
//public class OrderedItems {
//	
//		
//		@Id
//	    @ManyToOne
//	    @JoinColumn(name = "product_id", referencedColumnName = "p_id")
//	    private Product product;
//
//	    @Id
//	    @ManyToOne
//	    @JoinColumn(name = "order_id", referencedColumnName = "o_id")
//	    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
//	    private MyOrder order;
//
//	    @Column(name = "quantity")
//	    private int quantity;
//
//	    @Column(name = "rating", columnDefinition = "integer default 0")
//	    private int rating;
//
//
//}
