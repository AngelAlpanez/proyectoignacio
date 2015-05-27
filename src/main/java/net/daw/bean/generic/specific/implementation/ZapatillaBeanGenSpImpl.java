/*
 * Copyright (C) July 2014 Rafael Aznar
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
package net.daw.bean.generic.specific.implementation;

import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import com.google.gson.annotations.Expose;
import java.util.Date;

public class ZapatillaBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    public ZapatillaBeanGenSpImpl() {
    }

    public ZapatillaBeanGenSpImpl(Integer id) {
        super(id);
    }

    @Expose
    private String nombre = "";
    //private String presentacion = "";
    @Expose
    private Double precio = 0.0;
     @Expose
    private Integer cantidad = 0;
    @Expose(serialize = false)
    private Integer id_marcas = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private MarcasBeanGenSpImpl obj_marcas = null;
    @Expose(serialize = false)
    private Integer id_superficie = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private SuperficieBeanGenSpImpl obj_superficie = null;
    @Expose(serialize = false)
    private Integer id_pisada = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private PisadaBeanGenSpImpl obj_pisada = null;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
    
    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Integer getId_marcas() {
        return id_marcas;
    }

    public void setId_marcas(Integer id_marcas) {
        this.id_marcas = id_marcas;
    }

    public MarcasBeanGenSpImpl getObj_marcas() {
        return obj_marcas;
    }

    public void setObj_marcas(MarcasBeanGenSpImpl obj_marcas) {
        this.obj_marcas = obj_marcas;
    }

    public Integer getId_superficie() {
        return id_superficie;
    }

    public void setId_superficie(Integer id_superficie) {
        this.id_superficie = id_superficie;
    }

    public SuperficieBeanGenSpImpl getObj_superficie() {
        return obj_superficie;
    }

    public void setObj_superficie(SuperficieBeanGenSpImpl obj_superficie) {
        this.obj_superficie = obj_superficie;
    }

    public Integer getId_pisada() {
        return id_pisada;
    }

    public void setId_pisada(Integer id_pisada) {
        this.id_pisada = id_pisada;
    }

    public PisadaBeanGenSpImpl getObj_pisada() {
        return obj_pisada;
    }

    public void setObj_pisada(PisadaBeanGenSpImpl obj_pisada) {
        this.obj_pisada = obj_pisada;
    }

}
