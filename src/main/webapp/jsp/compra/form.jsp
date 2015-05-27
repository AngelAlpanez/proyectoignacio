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

<form class="form-horizontal" role="form" action="#" id="compraForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_usuario_id">Usuario: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_usuario_id" class="input-mini" name="id_usuario" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_usuario_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_usuario_desc" id="obj_usuario_desc"></label>                     
    </div>


    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_zapatilla_id">Zapatilla: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_zapatilla_id" class="input-mini" name="id_zapatilla" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_zapatilla_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_zapatilla_desc" id="obj_zapatilla_desc"></label>                     
    </div>




    <div class="form-group">
        <label class="col-sm-2 control-label"  for="precio">Precio:</label>
        <div class="col-sm-6">
            <input type="text" id="precio" class="form-control"  name="precio" size="15" placeholder="precio" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="cantidad">Cantidad:</label>
        <div class="col-sm-6">
            <input type="text" id="cantidad" class="form-control"  name="cantidad" size="15" placeholder="cantidad" />
        </div>
    </div>

    <input type="hidden" id="cantidad"/>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="cantidadvalor">Cuantas quieres:</label>
        <div class="col-sm-6">
            <input type="text" id="cantidadvalor" class="form-control"  name="cantidadvalor" size="15" placeholder="cantidad" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="fecha">Fecha:</label> 
        <div class="col-sm-3">           
            <div class='input-group date' id='fecha_group'>
                <input type='text' class="form-control" id='fecha' name="fecha_group" placeholder="fecha" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
    </div>







    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div id="messages"></div>
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-primary" id="submitForm">Guardar</button>
            <button class="btn btn-primary js-compra">Comprar</button>
            <button type="button" class="btn btn-success"><a href="carritoFinal.jsp">Terminar y pagar</a></button>
        </div>
    </div>

</form>

<script type="text/javascript">

    



</script>
