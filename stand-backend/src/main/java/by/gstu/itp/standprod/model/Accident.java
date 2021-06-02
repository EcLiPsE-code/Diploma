package by.gstu.itp.standprod.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "accidents")
public class Accident {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Column(name="Id", nullable = false)
    private String id;
    @Column(name = "Type", nullable = false)
    private String type;
    @Column(name = "Description", nullable = false)
    private String description;

    public String getId(){return id;}
    public void setId(String id){this.id = id;}
    public String getType(){return type;}
    public void setType(String type){this.type = type;}
    public String getDescription(){return description;}
    public void setDescription(String description){this.description = description;}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Accident accident = (Accident) o;
        return Objects.equals(id, accident.id) && Objects.equals(type, accident.type) && Objects.equals(description, accident.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type, description);
    }
}
