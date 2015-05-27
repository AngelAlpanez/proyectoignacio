
<%@page import="net.daw.carrito.Zapatilla"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <script src="js/jquery-1.11.1.min.js"></script>        
        <script src="js/bootstrap.min.js"></script>   
        <title>JSP Page</title>
    </head>
    <body>
        <%
            HttpSession miSesion = request.getSession();
            String strLoginDeUsuario = (String) miSesion.getAttribute("login");
            if (!"rafael".equals(strLoginDeUsuario)) {
        %>
        <h1>Si no estas logueado no puedes comprar!</h1>
        <a href="formlogin.html">Volver al formulario de login</a>
        <%} else {%>
        <div class="jumbotron">
            <h1>Bienvenido a RUN</h1><br/>
            <h2>Hola, <%=strLoginDeUsuario%>, Bienvenido a nuestra tienda.</h2><div class="container"></div></div> 
        <div class="container">
            <div class="col-md-3">
                <img src="imgs/adidas.jpg" alt="adidas" >
                <h1>Adidas Ultra Boost</h1>
                <form action="carrito" method="GET"><input type="hidden" name="modelo" value="asics"><input type="text" name="cantidad" class="form-control" placeholder="Cantidad" id="cantidadadidas">
                    <button id="adidas" type="button" class="btn btn-primary">Añadir al carrito</button></form>
            </div>                     
        </div>
        <div class="jumbotron">
            <div class="container">
                <div class="col-md-6">
                    <h1>Compra:</h1>
                    <div id="carro">
                    </div>
                    <script type="text/javascript">
                        $(document).ready(function () {
                            
                                $.ajax({
                                    url: "<%=request.getContextPath()%>/carrito?modelo=adidas&cantidad=0",
                                    type: "GET",
                                    success: function (source) {
                                        $("#carro").html(source);
                                    }
                                });
                           

                            $("#adidas").click(function () {
                                $.ajax({
                                    url: "<%=request.getContextPath()%>/carrito?modelo=adidas&cantidad=" + $("#cantidadadidas").val(),
                                    type: "GET",
                                    success: function (source) {
                                        document.getElementById('carro').innerHTML = source;
                                    }
                                });
                                return false;
                            });




                        });
                    </script>
                    <button type="button" class="btn btn-success"><a href="carritoFinal.jsp">Terminar y pagar</a></button>
                </div>
                <div class="col-md-6">
                    <h2>He cambiado de idea, volveré en otro momento:</h2>
                    <button type="button" class="btn btn-success"><a href="logout">Logout</a></button>
                    <button type="button" class="btn btn-success"><a href="./jsp">Volver a run</a></button>
                </div>
            </div></div>
            <%}%>

    </body>
</html>
