<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="net.daw.carrito.Zapatilla"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <script src="js/jquery-1.11.1.min.js"></script>        
        <script src="js/bootstrap.min.js"></script>  
        <title>JSP Page</title>
    </head>
    <%

        float precio = 0;
        int stock = 0;
        int cantidad = 0;
        String nombre = "";

        Zapatilla zapa = (Zapatilla) request.getSession().getAttribute("zapatilla");
        if (zapa != null) {
            precio = zapa.getPrecio();
            nombre = zapa.getNombre();
            stock = zapa.getStock();
            cantidad = zapa.getPurchased();
        }
    %>
    <body>



        <div class="jumbotron">
            <h1>Bienvenido a RUN</h1><br/>

            <div class="container">
                <div class="col-md-3">
                    <img src="imgs/adidas.jpg" alt="adidas" >
                    <h1> La compra de tus </h1>
                            <h2><%=nombre%></h2>
                            <h2> esta a punto de realizarse.</h2>
                                <p> </p>
                                <p> </p>
                                <p> Tienes <%=cantidad%> en el carrito
                                    a pagar <%=precio%>
                                <p> </p>
                                    <button id="js-terminar" type="button" class="btn btn-primary">Terminar y pagar</button></form>
                                    </div>                     
                                    </div>
                                <div class="jumbotron">
                                    <div class="container">
                                        <div class="col-md-6">
                                          
                                            <div id="carro">
                                            </div>
                                            <script type="text/javascript">
                                                $(document).ready(function () {
                                                    $(".js-terminar").click(function () {
                                                        var id = $("#id").val();
                                                        var id_usuario = $("#obj_usuario_id").val();
                                                        var precio= $("#precio").val();
                                                       
                                                        var stock = $("#cantidad").val();

                                                        $.ajax({
                                                            url: "<%=request.getContextPath()%>/json?ob=carrito",
                                                            type: "POST",
                                                            data: {id: id,
                                                                id_usuario: id_usuario,
                                                                precio: precio,
                                                                stock: stock
                                                            },
                                                            success: function (source) {
                                           
                                                            }
                                                        });
                                                        return false;
                                                    });
                                                });


                                            </script>


                                        </div>

                                        <div class="col-md-6">
                                            <h2>He cambiado de idea, volveré en otro momento:</h2> 
                                            <button type="button" class="btn btn-success"><a href="logout">Logout</a></button>
                                            <button type="button" class="btn btn-success"><a href="./jsp">Volver a run</a></button>
                                        </div>
                                    </div>
                                </div>
                                                            


                                </body>

                                </html>
