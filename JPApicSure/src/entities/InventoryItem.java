package entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class InventoryItem {

	// fields
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private Boolean active;
	
	private Double rentalRate;

	@ManyToOne
	@JoinColumn(name="equipmentId")
	private Equipment equipment;

	@JsonBackReference(value="inventoryToinvItem")
	@ManyToOne
	@JoinColumn(name="inventoryId")
	private Inventory inventory;
	
	@JsonIgnore
	@ManyToMany(mappedBy="inventoryitems")
	private List<ReservationItem> reservationItems;

//	@JsonBackReference(value="test")
	@JsonIgnore
	@OneToMany(mappedBy="inventoryItem")
	private List<CartItem> cartItems;

	// gets and sets
	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Double getRentalRate() {
		return rentalRate;
	}

	public void setRentalRate(Double rentalRate) {
		this.rentalRate = rentalRate;
	}

	public Equipment getEquipment() {
		return equipment;
	}

	public void setEquipment(Equipment equipment) {
		this.equipment = equipment;
	}

	public Inventory getInventory() {
		return inventory;
	}

	public void setInventory(Inventory inventory) {
		this.inventory = inventory;
	}

	public List<ReservationItem> getReservationItems() {
		return reservationItems;
	}

	public void setReservationItems(List<ReservationItem> reservationItems) {
		this.reservationItems = reservationItems;
	}

	public List<CartItem> getCartItems() {
		return cartItems;
	}

	public void setCartItems(List<CartItem> cartItems) {
		this.cartItems = cartItems;
	}

	public int getId() {
		return id;
	}
}	