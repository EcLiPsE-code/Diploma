package by.gstu.itp.standprod.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Column(name = "Id", nullable = false)
    private String id;
    @Column(name = "Name", nullable = false)
    private String name;
    @Column(name = "Surname", nullable = false)
    private String surname;
    @Column(name="LastName", nullable = false)
    private String lastName;
    @Column(name="Phone", nullable = false)
    private String phoneNumber;
    @Column(name = "Email", nullable = false)
    private String email;
    @Column(name = "Password", nullable = false)
    private String password;
    @Column(name = "Deleted", nullable = false)
    private Boolean deleted;

    public String getId(){return id;}
    public void setId(String id){
        this.id = id;
    }
    public String getName(){return name;}
    public void setName(String name){
        this.name = name;
    }
    public String getSurname(){return surname;}
    public void setSurname(String surname){
        this.surname = surname;
    }
    public String getLastName(){return lastName;}
    public void setLastName(String lastName){
        this.lastName = lastName;
    }
    public String getPhoneNumber(){return phoneNumber;}
    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    public String getEmail(){return email;}
    public void setEmail(String email){
        this.email = email;
    }
    public String getPassword(){return password;}
    public void setPassword(String password){this.password = password;}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(id, employee.id) && Objects.equals(name, employee.name) && Objects.equals(surname, employee.surname) && Objects.equals(lastName, employee.lastName) && Objects.equals(phoneNumber, employee.phoneNumber) && Objects.equals(email, employee.email) && Objects.equals(password, employee.password) && Objects.equals(deleted, employee.deleted);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, surname, lastName, phoneNumber, email, password, deleted);
    }
}
