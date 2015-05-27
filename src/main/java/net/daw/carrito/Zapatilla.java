/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.carrito;

import java.util.Random;

/**
 *
 * @author vesprada
 */
public class Zapatilla {

    private float precio;
    private int stock;
    private int purchased;
    private String nombre = "";

    public Zapatilla(int stock) {
        this.stock=stock;
    }
    
    public Zapatilla(float precio, String nombre, int stock ){
        this.precio=precio;
        this.nombre=nombre;
        this.stock=stock;
        
    }

    public void purchase(int quantity) {
            stock -= quantity;
            purchased+=quantity;
        
    }

    public int getStock() {
        return stock;
    }

    public void setStock() {
        Random r = new Random();
        stock=r.nextInt(5)+1;
    }

    public boolean haveEnoughStock(int quantity) {
        if (stock >= quantity) {
            return true;

        }
        return false;
    }

    public int getPurchased() {
        return purchased;
    }

    public void setPurchased(int purchased) {
        this.purchased = purchased;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    
    

    
    
    
    

}
