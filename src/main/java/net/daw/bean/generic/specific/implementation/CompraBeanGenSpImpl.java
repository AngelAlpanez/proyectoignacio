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

public class CompraBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    public CompraBeanGenSpImpl() {
    }

    public CompraBeanGenSpImpl(Integer id) {
        super(id);
    }
    
    


    
    @Expose(serialize = false)
    private Integer id_zapatilla = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private ZapatillaBeanGenSpImpl obj_zapatilla = null;
    @Expose(serialize = false)
    private Integer id_usuario = 0; //importante inicializar a 0 las claves ajenas
    @Expose(deserialize = false)
    private UsuarioBeanGenSpImpl obj_usuario = null;
    @Expose
    private Integer cantidad = 0;
    @Expose
    private Integer cantidadvalor = 0;
    @Expose
    private Double precio = 0.0;
    @Expose
    private Date fecha = new Date();

    public Integer getId_zapatilla() {
        return id_zapatilla;
    }

    public void setId_zapatilla(Integer id_zapatilla) {
        this.id_zapatilla = id_zapatilla;
    }

    public ZapatillaBeanGenSpImpl getObj_zapatilla() {
        return obj_zapatilla;
    }

    public void setObj_zapatilla(ZapatillaBeanGenSpImpl obj_zapatilla) {
        this.obj_zapatilla = obj_zapatilla;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public UsuarioBeanGenSpImpl getObj_usuario() {
        return obj_usuario;
    }

    public void setObj_usuario(UsuarioBeanGenSpImpl obj_usuario) {
        this.obj_usuario = obj_usuario;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Integer getCantidadvalor() {
        return cantidadvalor;
    }

    public void setCantidadvalor(Integer cantidadvalor) {
        this.cantidadvalor = cantidadvalor;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    
   
    
   
    

    

}
