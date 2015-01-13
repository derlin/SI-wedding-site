/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ch.eiafr.si.wedding.service;

import ch.eiafr.si.wedding.jpa.Gift;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

/**
 *
 * @author lucy
 */
@Stateless
@Path("ch.eiafr.si.wedding.jpa.gift")
public class GiftFacadeREST extends AbstractFacade<Gift> {
    @PersistenceContext(unitName = "WeddingSiteAppPU")
    private EntityManager em;

    public GiftFacadeREST() {
        super(Gift.class);
    }

    @POST
    @Override
    @Consumes({"application/xml", "application/json"})
    public void create(Gift entity) {
        super.create(entity);
    }
    
    /*
    @GET
    @Path("money")
    public void createMoneyGift(@PathParam("addedby") String addedBy, @PathParam("value") Float value) {
        Gift entity = new Gift();
        entity.setTitle(Gift.MONEY_GIFT_TITLE);
        entity.setAddedBy(addedBy);
        entity.setPrice(value);
        entity.setAvailable(false);
        super.create(entity);
    }
    */
    
    @POST
    @Path("money")
    @Consumes({"application/xml", "application/json"})
    public void addMoneyGift(Gift entity) {
        entity.setTitle(Gift.MONEY_GIFT_TITLE);
        entity.setAvailable(false);
        super.create(entity);
    }
    
    
    @PUT
    @Path("{id}")
    @Consumes({"application/xml", "application/json"})
    public void edit(@PathParam("id") Long id, Gift entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Long id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    @Produces({"application/xml", "application/json"})
    public Gift find(@PathParam("id") Long id) {
        return super.find(id);
    }

    @GET
    @Override
    @Produces({"application/xml", "application/json"})
    public List<Gift> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({"application/xml", "application/json"})
    public List<Gift> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
        return super.findRange(new int[]{from, to});
    }

    @GET
    @Path("count")
    @Produces("text/plain")
    public String countREST() {
        return String.valueOf(super.count());
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
    
}
