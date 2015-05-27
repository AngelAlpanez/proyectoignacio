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
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%@page import="net.daw.helper.AppInformationHelper"%>

<%
    int id_tipousuario = 0, id_usuario = 0;
    UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    if (user != null) {
        id_tipousuario = user.getId_tipousuario();
        id_usuario = user.getId();
    }
%>

<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Ajax Yield</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/bootstrap.min.css">

        <!-- <link rel="stylesheet" href="css/jquery-ui.css"> -->
        <link rel="stylesheet" href="css/animate.css">
        <link rel="stylesheet" href="css/bootstrapValidator.min.css">
        <link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css"  />
        <link rel="stylesheet" href="css/zapatilla.css">



        <% if (user != null) {%>
        <link rel="stylesheet" href="css/skin/<%=user.getSkin()%>.css">
        <% } else {%>
        <link rel="stylesheet" href="css/skin/main.css">
        <% }%>

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <!--[if lt IE 7]>
        <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
        <![endif]-->

        <!-- Fixed navbar -->
        <div class="navbar">
            <div class="container barra">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
            
                    
                    </button>
                    <a class="navbar-brand" href="jsp"><img src="http://www.poushoes.com/img/xtallas.png.pagespeed.ic.9LeCCWF-tA.png"/></a>
                </div>
                <div class="nav-divider">

                    <ul class="nav nav-pills">
                        <%if (user != null) {%>
                        <jsp:include page="jsp/menuSuperior.jsp" /> 
                        <% }%>
                    
                   
                        <jsp:include page="jsp/usuario/infologin.jsp" />
                    </ul>

                </div><!--/.nav-collapse -->
            </div>
        </div>


        <% if (user != null) {%>
       
        <div class="container">
        <a href="jsp#/zapatilla/list/id=1&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=1"><img src="css/images/logos/adidas.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=2&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=2"><img src="css/images/logos/asics.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=3&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=3"><img src="css/images/logos/brooks.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=4&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=4"><img src="css/images/logos/inov8.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=5&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=5"><img src="css/images/logos/joma.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=6&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=6"><img src="css/images/logos/kswiss.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=7&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=7"><img src="css/images/logos/kelme.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=8&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=8"><img src="css/images/logos/la_sportiva.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=9&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=9"><img src="css/images/logos/mizuno.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=10&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=10"><img src="css/images/logos/newbalance.png"</a></a>
        <a href="jsp#/zapatilla/list/id=11&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=11"><img src="css/images/logos/nike.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=12&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=12"><img src="css/images/logos/puma.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=13&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=13"><img src="css/images/logos/reebok.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=14&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=14"><img src="css/images/logos/saucony.png"</a></a>
        <a href="jsp#/zapatilla/list/id=15&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=15"><img src="css/images/logos/scott.png"</a></a>
        <a href="jsp#/zapatilla/list/id=16&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=16"><img src="css/images/logos/thenorthface.jpg"</a></a>
        <a href="jsp#/zapatilla/list/id=17&rpp=10&vf=7&systemfilter=id_marcas&systemfilteroperator=equals&systemfiltervalue=17"><img src="css/images/logos/zoot.jpg"</a></a>
           
            <div class="row">
                
                <div class="col-md-10">
                    <div id="indexContenido"></div>
                    <div id="indexContenidoJsp">
                        <jsp:include page='<%=(String) request.getAttribute("contenido")%>' />                
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-12" id="contenidoParseado"></div>   
            </div>
            
        </div>            

        <% } else {%>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div id="indexContenidoJsp">
                        <jsp:include page='<%=(String) request.getAttribute("contenido")%>' />                
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12" id="contenidoParseado"></div>   
            </div>
          
        </div> 


        <% }%>

        <!-- carga de javascript   -->

        <script type="text/javascript"  src="./js/vendor/jquery-1.11.1.min.js"></script>
        <script type="text/javascript"  src="./js/vendor/bootstrap.min.js"></script>
        <script type="text/javascript"  src="./js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

        <script type="text/javascript"  src="./js/vendor/moment.js"></script>
        <script type="text/javascript"  src="./js/vendor/moment.locale.es.js"></script>
        <script type="text/javascript"  src="./js/vendor/bootstrap-datetimepicker.min.js"></script>

        <script type="text/javascript"  src="./js/vendor/path.min.js"></script> 
        <script type="text/javascript"  src="./js/vendor/bootstrapValidator.min.js"></script>
        <script type="text/javascript"  src="./js/vendor/language/es_ES.js"></script>
        <script type="text/javascript"  src="./js/vendor/creole-parser.js"></script>

        <!--
        <script type="text/javascript"  src="./js/vendor/jquery-ui.js"></script>
        <script src="./js/vendor/jquery.validate.min.js"></script>
        
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
        <script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
        -->


        <script src="js/generic/view.js" charset="UTF-8"></script>    
        <script src="js/generic/param.js" charset="UTF-8"></script>
        <script src="js/generic/ajax.js" charset="UTF-8"></script>
        <script src="js/generic/util.js" charset="UTF-8"></script>
        <script src="js/generic/model.js" charset="UTF-8"></script>        
        <script src="js/generic/control.js" charset="UTF-8"></script> 
        <script src="js/generic/initialization.js" charset="UTF-8"></script>

        <script type="text/javascript">
            var path = '<%=request.getContextPath()%>';
            var myuser = <%=id_usuario%>;
            var mylevel = <%=id_tipousuario%>;
        </script>

        <script src="js/specific/documento/control.js" charset="UTF-8"></script>
        <script src="js/specific/documento/model.js" charset="UTF-8"></script>
        <script src="js/specific/documento/view.js" charset="UTF-8"></script>
        <script src="js/specific/documento/routes.js" charset="UTF-8"></script>

        <script src="js/specific/opcion/control.js" charset="UTF-8"></script>
        <script src="js/specific/opcion/model.js" charset="UTF-8"></script>
        <script src="js/specific/opcion/view.js" charset="UTF-8"></script>
        <script src="js/specific/opcion/routes.js" charset="UTF-8"></script>

        <!-- ***********  RED SOCIAL  *********** -->
        <script src="js/specific/publicacion/control.js" charset="UTF-8"></script>
        <script src="js/specific/publicacion/model.js" charset="UTF-8"></script>
        <script src="js/specific/publicacion/view.js" charset="UTF-8"></script>
        <script src="js/specific/publicacion/routes.js" charset="UTF-8"></script>

        <script src="js/specific/amistad/control.js" charset="UTF-8"></script>
        <script src="js/specific/amistad/model.js" charset="UTF-8"></script>
        <script src="js/specific/amistad/view.js" charset="UTF-8"></script>
        <script src="js/specific/amistad/routes.js" charset="UTF-8"></script>

        <script src="js/specific/estado/control.js" charset="UTF-8"></script>
        <script src="js/specific/estado/model.js" charset="UTF-8"></script>
        <script src="js/specific/estado/view.js" charset="UTF-8"></script>
        <script src="js/specific/estado/routes.js" charset="UTF-8"></script>        

        <script src="js/specific/redsocialperfil/control.js" charset="UTF-8"></script>
        <script src="js/specific/redsocialperfil/model.js" charset="UTF-8"></script>
        <script src="js/specific/redsocialperfil/view.js" charset="UTF-8"></script>
        <script src="js/specific/redsocialperfil/routes.js" charset="UTF-8"></script>

        <script src="js/specific/inicioRedSocial/control.js" charset="UTF-8"></script>
        <script src="js/specific/inicioRedSocial/model.js" charset="UTF-8"></script>
        <script src="js/specific/inicioRedSocial/view.js" charset="UTF-8"></script>
        <script src="js/specific/inicioRedSocial/routes.js" charset="UTF-8"></script>
        <!-- ***********  FIN RED SOCIAL  *********** -->

        <script src="js/specific/cuestionario/control.js" charset="UTF-8"></script>
        <script src="js/specific/cuestionario/model.js" charset="UTF-8"></script>
        <script src="js/specific/cuestionario/view.js" charset="UTF-8"></script>
        <script src="js/specific/cuestionario/routes.js" charset="UTF-8"></script>
        <script src="js/specific/actividad/control.js" charset="UTF-8"></script>
        <script src="js/specific/actividad/model.js" charset="UTF-8"></script>
        <script src="js/specific/actividad/view.js" charset="UTF-8"></script>
        <script src="js/specific/actividad/routes.js" charset="UTF-8"></script>


        <script src="js/specific/usuario/control.js" charset="UTF-8"></script>
        <script src="js/specific/usuario/model.js" charset="UTF-8"></script>
        <script src="js/specific/usuario/view.js" charset="UTF-8"></script>
        <script src="js/specific/usuario/routes.js" charset="UTF-8"></script>

        <script src="js/specific/tipodocumento/control.js" charset="UTF-8"></script>
        <script src="js/specific/tipodocumento/model.js" charset="UTF-8"></script>
        <script src="js/specific/tipodocumento/view.js" charset="UTF-8"></script>
        <script src="js/specific/tipodocumento/routes.js" charset="UTF-8"></script>

        <script src="js/specific/pregunta/control.js" charset="UTF-8"></script>
        <script src="js/specific/pregunta/model.js" charset="UTF-8"></script>
        <script src="js/specific/pregunta/view.js" charset="UTF-8"></script>
        <script src="js/specific/pregunta/routes.js" charset="UTF-8"></script>

        <script src="js/specific/entrega/control.js" charset="UTF-8"></script>
        <script src="js/specific/entrega/model.js" charset="UTF-8"></script>
        <script src="js/specific/entrega/view.js" charset="UTF-8"></script>
        <script src="js/specific/entrega/routes.js" charset="UTF-8"></script>


        <script src="js/specific/tipousuario/control.js" charset="UTF-8"></script>
        <script src="js/specific/tipousuario/model.js" charset="UTF-8"></script>
        <script src="js/specific/tipousuario/view.js" charset="UTF-8"></script>
        <script src="js/specific/tipousuario/routes.js" charset="UTF-8"></script>
        <!-- Fin Modificación Juanma Usuarios -->

        <!-- FORO -->        
        <script src="js/specific/tipotema/control.js" charset="UTF-8"></script>
        <script src="js/specific/tipotema/model.js" charset="UTF-8"></script>
        <script src="js/specific/tipotema/view.js" charset="UTF-8"></script>
        <script src="js/specific/tipotema/routes.js" charset="UTF-8"></script>

        <script src="js/specific/tema/control.js" charset="UTF-8"></script>
        <script src="js/specific/tema/model.js" charset="UTF-8"></script>
        <script src="js/specific/tema/view.js" charset="UTF-8"></script>
        <script src="js/specific/tema/routes.js" charset="UTF-8"></script>

        <script src="js/specific/post/control.js" charset="UTF-8"></script>
        <script src="js/specific/post/model.js" charset="UTF-8"></script>
        <script src="js/specific/post/view.js" charset="UTF-8"></script>
        <script src="js/specific/post/routes.js" charset="UTF-8"></script>

        <script src="js/specific/mensajeprivado/control.js" charset="UTF-8"></script>
        <script src="js/specific/mensajeprivado/model.js" charset="UTF-8"></script>
        <script src="js/specific/mensajeprivado/view.js" charset="UTF-8"></script>
        <script src="js/specific/mensajeprivado/routes.js" charset="UTF-8"></script>
        <!-- FIN FORO -->

        <!-- PROPUESTAS Y VOTACIONES -->   

        <script src="js/specific/propuesta/control.js" charset="UTF-8"></script>
        <script src="js/specific/propuesta/model.js" charset="UTF-8"></script>
        <script src="js/specific/propuesta/view.js" charset="UTF-8"></script>
        <script src="js/specific/propuesta/routes.js" charset="UTF-8"></script>

        <script src="js/specific/tipopropuesta/control.js" charset="UTF-8"></script>
        <script src="js/specific/tipopropuesta/model.js" charset="UTF-8"></script>
        <script src="js/specific/tipopropuesta/view.js" charset="UTF-8"></script>
        <script src="js/specific/tipopropuesta/routes.js" charset="UTF-8"></script>

        <script src="js/specific/comentario/control.js" charset="UTF-8"></script>
        <script src="js/specific/comentario/model.js" charset="UTF-8"></script>
        <script src="js/specific/comentario/view.js" charset="UTF-8"></script>
        <script src="js/specific/comentario/routes.js" charset="UTF-8"></script>

        <!--FIN PROPUESTAS Y VOTACIONES-->

        <script src="js/specific/proveedor/control.js" charset="UTF-8"></script>
        <script src="js/specific/proveedor/model.js" charset="UTF-8"></script>
        <script src="js/specific/proveedor/view.js" charset="UTF-8"></script>
        <script src="js/specific/proveedor/routes.js" charset="UTF-8"></script>


        <script src="js/specific/impuesto/control.js" charset="UTF-8"></script>
        <script src="js/specific/impuesto/model.js" charset="UTF-8"></script>
        <script src="js/specific/impuesto/view.js" charset="UTF-8"></script>
        <script src="js/specific/impuesto/routes.js" charset="UTF-8"></script>

        <script src="js/specific/pedido/control.js" charset="UTF-8"></script>
        <script src="js/specific/pedido/model.js" charset="UTF-8"></script>
        <script src="js/specific/pedido/view.js" charset="UTF-8"></script>
        <script src="js/specific/pedido/routes.js" charset="UTF-8"></script>

        <script src="js/specific/detalle_pedido/control.js" charset="UTF-8"></script>
        <script src="js/specific/detalle_pedido/model.js" charset="UTF-8"></script>
        <script src="js/specific/detalle_pedido/view.js" charset="UTF-8"></script>
        <script src="js/specific/detalle_pedido/routes.js" charset="UTF-8"></script>

        <script src="js/specific/respuesta/control.js" charset="UTF-8"></script>
        <script src="js/specific/respuesta/model.js" charset="UTF-8"></script>
        <script src="js/specific/respuesta/view.js" charset="UTF-8"></script>
        <script src="js/specific/respuesta/routes.js" charset="UTF-8"></script>

        <script src="js/specific/producto/control.js" charset="UTF-8"></script>
        <script src="js/specific/producto/model.js" charset="UTF-8"></script>
        <script src="js/specific/producto/view.js" charset="UTF-8"></script>
        <script src="js/specific/producto/routes.js" charset="UTF-8"></script>

        <script src="js/specific/tipoproducto/control.js" charset="UTF-8"></script>
        <script src="js/specific/tipoproducto/model.js" charset="UTF-8"></script>
        <script src="js/specific/tipoproducto/view.js" charset="UTF-8"></script>
        <script src="js/specific/tipoproducto/routes.js" charset="UTF-8"></script>

        <script src="js/specific/documentobonito/control.js" charset="UTF-8"></script>
        <script src="js/specific/documentobonito/model.js" charset="UTF-8"></script>
        <script src="js/specific/documentobonito/view.js" charset="UTF-8"></script>
        <script src="js/specific/documentobonito/routes.js" charset="UTF-8"></script>

        <script src="js/specific/trabajo/control.js" charset="UTF-8"></script>
        <script src="js/specific/trabajo/model.js" charset="UTF-8"></script>
        <script src="js/specific/trabajo/view.js" charset="UTF-8"></script>
        <script src="js/specific/trabajo/routes.js" charset="UTF-8"></script>

        <script src="js/specific/tipotarea/control.js" charset="UTF-8"></script>
        <script src="js/specific/tipotarea/model.js" charset="UTF-8"></script>
        <script src="js/specific/tipotarea/view.js" charset="UTF-8"></script>
        <script src="js/specific/tipotarea/routes.js" charset="UTF-8"></script>

        <script src="js/specific/proyecto/control.js" charset="UTF-8"></script>
        <script src="js/specific/proyecto/model.js" charset="UTF-8"></script>
        <script src="js/specific/proyecto/view.js" charset="UTF-8"></script>
        <script src="js/specific/proyecto/routes.js" charset="UTF-8"></script>


        <script src="js/specific/estadotarea/control.js" charset="UTF-8"></script>
        <script src="js/specific/estadotarea/model.js" charset="UTF-8"></script>
        <script src="js/specific/estadotarea/view.js" charset="UTF-8"></script>
        <script src="js/specific/estadotarea/routes.js" charset="UTF-8"></script>

        <script src="js/specific/producto/control.js" charset="UTF-8"></script>
        <script src="js/specific/producto/model.js" charset="UTF-8"></script>
        <script src="js/specific/producto/view.js" charset="UTF-8"></script>
        <script src="js/specific/producto/routes.js" charset="UTF-8"></script>
        
        <script src="js/specific/marcas/control.js" charset="UTF-8"></script>
        <script src="js/specific/marcas/model.js" charset="UTF-8"></script>
        <script src="js/specific/marcas/view.js" charset="UTF-8"></script>
        <script src="js/specific/marcas/routes.js" charset="UTF-8"></script>
        
        <script src="js/specific/marcas/control.js" charset="UTF-8"></script>
        <script src="js/specific/marcas/model.js" charset="UTF-8"></script>
        <script src="js/specific/marcas/view.js" charset="UTF-8"></script>
        <script src="js/specific/marcas/routes.js" charset="UTF-8"></script>
        
        <script src="js/specific/pisada/control.js" charset="UTF-8"></script>
        <script src="js/specific/pisada/model.js" charset="UTF-8"></script>
        <script src="js/specific/pisada/view.js" charset="UTF-8"></script>
        <script src="js/specific/pisada/routes.js" charset="UTF-8"></script>
        
        <script src="js/specific/superficie/control.js" charset="UTF-8"></script>
        <script src="js/specific/superficie/model.js" charset="UTF-8"></script>
        <script src="js/specific/superficie/view.js" charset="UTF-8"></script>
        <script src="js/specific/superficie/routes.js" charset="UTF-8"></script>
        
        <script src="js/specific/zapatilla/control.js" charset="UTF-8"></script>
        <script src="js/specific/zapatilla/model.js" charset="UTF-8"></script>
        <script src="js/specific/zapatilla/view.js" charset="UTF-8"></script>
        <script src="js/specific/zapatilla/routes.js" charset="UTF-8"></script>
        
        <script src="js/specific/compra/control.js" charset="UTF-8"></script>
        <script src="js/specific/compra/model.js" charset="UTF-8"></script>
        <script src="js/specific/compra/view.js" charset="UTF-8"></script>
        <script src="js/specific/compra/routes.js" charset="UTF-8"></script>


        <script src="js/specific/tipodocumento/model.js" charset="UTF-8"></script>

        <script type="text/javascript">

            $(document).ready(function () {

                //$('#indexContenidoJsp').addClass('animated slideInDown');
                //$('#menuSuperior').addClass('animated slideInLeft');
                //$('#menuLateral').addClass('animated slideInRight');

                inicializacion();


                fDocumentoRoutes();
                fTipotareaRoutes();
                fTrabajoRoutes();
                fEstadotareaRoutes();
                fProyectoRoutes();
                fOpcionRoutes();
                fPreguntaRoutes();
                fCuestionarioRoutes();
                fAmistadRoutes();
                fUsuarioRoutes();
                fPublicacionRoutes();
                fRedsocialperfilRoutes();
                fInicioRedSocialRoutes();
                fPostRoutes();
                fMensajeprivadoRoutes();
                fTemaRoutes();
                fTipotemaRoutes();
                fEstadoRoutes();
                fProveedorRoutes();
                fImpuestoRoutes();
                fActividadRoutes();
                fEntregaRoutes();
                fPedidoRoutes();
                fDetalle_pedidoRoutes();
                fRespuestaRoutes();
                fComentarioRoutes();
                fPropuestaRoutes();
                fTipopropuestaRoutes();
                fProductoRoutes();
                fTipoproductoRoutes();
                fTipodocumentoRoutes();
                fMarcasRoutes();
                fPisadaRoutes();
                fSuperficieRoutes();
                fZapatillaRoutes();
                fCompraRoutes();
           
               
                
          
              



                Path.listen();

            });

        </script>
    </body>
</html>

