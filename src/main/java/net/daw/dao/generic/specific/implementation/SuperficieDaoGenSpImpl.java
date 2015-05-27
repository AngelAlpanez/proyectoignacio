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
package net.daw.dao.generic.specific.implementation;

import net.daw.dao.generic.implementation.TableDaoGenImpl;
import java.sql.Connection;
import net.daw.bean.generic.specific.implementation.SuperficieBeanGenSpImpl;

public class SuperficieDaoGenSpImpl extends TableDaoGenImpl<SuperficieBeanGenSpImpl> {

    public SuperficieDaoGenSpImpl(String strFuente, Connection pooledConnection) throws Exception {
        super(strFuente, "Superficie", pooledConnection);
    }

//    public String getDescription(int id) throws Exception {
//        SuperficieBean oSuperficieBean = new SuperficieBean();
//        oSuperficieBean.setId(id);
//        oSuperficieBean = this.get(oSuperficieBean);
//        String description;
//        if (oSuperficieBean.getTitulo().length() > 20) {
//            description = oSuperficieBean.getTitulo().substring(0, 19) + "...";
//        } else {
//            description = oSuperficieBean.getTitulo();
//        }
//        description += " (" + oSuperficieBean.getHits().toString() + " hits)";
//        return description;
//    }
}
