/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package edu.ijse.layered.db;

import java.sql.Connection;

/**
 *
 * @author user
 */
public class dbconnection {
    private static dbconnection DBConnection;
    
    private dbconnection(){
        
    }
    
    public static dbconnection getInstance(){
         if(DBConnection == null){
            DBConnection = new dbconnection();
        }
        return DBConnection;
    }

    public Connection getConnection() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}
