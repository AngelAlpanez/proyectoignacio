/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.carrito;

import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.Integer.parseInt;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author vesprada
 */
@WebServlet(name = "login", urlPatterns = {"/login"})
public class login extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {

            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet login</title>");
            out.println("<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\">");
            out.println("<script src=\"js/jquery-1.11.1.min.js\"></script> ");
            out.println("<script src=\"js/bootstrap.min.js\"></script>");
            out.println("</head>");
            out.println("<body>");
            if ("ignacio".equals(request.getParameter("user"))) {
                if ("1234".equals(request.getParameter("passwd"))) {
                    Zapatilla adidas = new Zapatilla(5);
                
                    
                    HttpSession miSesion = request.getSession();
                    miSesion.setAttribute("login", request.getParameter("user"));
                    miSesion.setAttribute("adidas", adidas);
                  
                    
                    out.println("<h1>Zona privada</h1>");
                    out.println("<a href=\"compra.jsp\">Acceso a la tienda</a><br />");
                    out.println("<a href=\"jsp\">Volver a RUN</a><br />");
                    out.println("<a href=\"logout\">Logout</a><br />");
                } else {
                    out.println("<h1>Error al intentar acceder: password incorrecto</h1>");
                    out.println("<a href=\"formlogin.html\">Volver al formulario de login</a>");
                }
            } else {
                out.println("<h1>Error al intentar acceder: login incorrecto</h1>");
                out.println("<a href=\"formlogin.html\">Volver al formulario de login</a>");
            }
            out.println("</body>");
            out.println("</html>");

        }

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
