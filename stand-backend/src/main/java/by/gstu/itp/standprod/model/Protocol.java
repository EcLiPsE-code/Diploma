package by.gstu.itp.standprod.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="protocols")
public class Protocol {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Column(name = "Id", nullable = false)
    private String id;
    @Column(name = "Name", nullable = false)
    private String name;

    public String getId(){return id;}
    public void setId(String id){this.id = id;}
    public String getName(){return name;}
    public void setName(String name){this.name = name;}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Protocol protocol = (Protocol) o;
        return Objects.equals(id, protocol.id) && Objects.equals(name, protocol.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}
