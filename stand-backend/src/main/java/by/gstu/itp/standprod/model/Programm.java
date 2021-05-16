package by.gstu.itp.standprod.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name="programs")
public class Programm {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Column(name = "Id", nullable = false)
    private String id;
    @Column(name = "Name", nullable = false)
    private String name;
    @Column(name = "Date", nullable = false)
    private LocalDate date;

    public String getId(){return id;}
    public void setId(String id){this.id = id;}
    public String getName(){return name;}
    public void setName(String name){this.name = name;}
    public LocalDate getDate(){return date;}
    public void setDate(LocalDate date){this.date = date;}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Programm programm = (Programm) o;
        return Objects.equals(id, programm.id) && Objects.equals(name, programm.name) && Objects.equals(date, programm.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, date);
    }
}
