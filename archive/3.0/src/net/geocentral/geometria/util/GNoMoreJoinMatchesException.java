/**
 * Copyright 2000-2010 Geometria Contributors
 * http://geocentral.net/geometria
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License
 * http://www.gnu.org/licenses
 */
package net.geocentral.geometria.util;

public class GNoMoreJoinMatchesException extends Exception {

    public GNoMoreJoinMatchesException() {
        super("No more matches");
    }
    
    private static final long serialVersionUID = 1L;
}