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

<%@page import="net.daw.helper.EstadoHelper"%>
<div class="container">
    <div class="wrapper">
    <form class="form-signin">       
      <h2 class="form-signin-heading">Please login</h2>
       <input type="hidden" name="ob" value="usuario" />
                <input type="hidden" name="op" value="login02" />                
                <label class="control-label" for="inputLogin" style="margin-top: 15px">Usuario:</label>
                <%
                    if (EstadoHelper.getTipo_estado() == EstadoHelper.getTipo_estado().Debug) {
                %>
                <input value="rafael" class="form-control"  id="inputLogin" type="text" placeholder="nombre de usuario" required="" autofocus="" name="login" />                                                    
                <%
                } else {
                %>
                <input class="form-control"  id="inputLogin" type="text" placeholder="nombre de usuario" required="" autofocus="" name="login" />                                                    
                <%
                    }
                %>
                <label class="control-label" for="password" style="margin-top: 15px">Password:</label>
                <%
                    if (EstadoHelper.getTipo_estado() == EstadoHelper.getTipo_estado().Debug) {
                %>
                <input value="rafael" class="form-control" type="password" id="inputPassword" placeholder="contraseņa"  required="" name="password" />                                                               
                <%
                } else {
                %>
                <input class="form-control" type="password" id="inputPassword" placeholder="contraseņa"  required="" name="password" />                                                               
                <%
                    }
                %>                
      
      <label class="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
      </label>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
    </form>
  </div>
    
</div>


