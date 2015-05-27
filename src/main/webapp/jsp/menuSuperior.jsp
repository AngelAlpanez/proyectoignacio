<%-- 
 Copyright (C) July 2014 Rafael Aznar

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
--%>
<%@ page import="java.util.*" %>
<%@page import="net.daw.carrito.Zapatilla"%>
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>



<%
  
    int id_tipousuario = 0, id_usuario = 0;
    String login = null;

    UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    if (user != null) {
        login = user.getLogin();
        id_tipousuario = user.getId_tipousuario();
        id_usuario = user.getId();
    }
%>



<ul class="nav navbar-nav">
    <li><a href="jsp"><span class="glyphicon glyphicon-home"></span></a></li>
    <li class="dropdown">
      


            <li><a href="jsp#/usuario">Usuario</a></li>
            <li><a href="jsp#/zapatilla">Zapatilla</a></li>
            <li><a href="jsp#/marcas">Marca</a></li>
            <li><a href="jsp#/superficie">Superficie</a></li>
            
            <li><a href="jsp#/compra">Compra</a></li> 
            

           
        </ul>
        <div class="salir">
    <%
    
    float precio=0;
    int stock=0;
    int cantidad=0;
    String nombre="";

    Zapatilla zapa = (Zapatilla) request.getSession().getAttribute("zapatilla");
    if (zapa != null) {
        precio=zapa.getPrecio();
        nombre=zapa.getNombre();
        stock= zapa.getStock();
        cantidad= zapa.getPurchased();
    }
%>


    
    
<p>Has comprado  <%=cantidad%> <%=nombre%> y quedan <%=stock%></p> 



<a href="./carritoFinal.jsp">Terminar y pagar</a>   
    
<p><a href="jsp?ob=usuario&op=logout">Salir</a></p>    
        </div>


