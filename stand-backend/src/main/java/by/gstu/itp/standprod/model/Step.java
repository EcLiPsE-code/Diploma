package by.gstu.itp.standprod.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Time;
import java.util.Objects;

@Entity
@Table(name="steps")
public class Step {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    @Column(name = "Id", nullable = false)
    private String id;
    @Column(name = "Pressure_1", nullable = false)
    private double pressure1;
    @Column(name="Pressure_2")
    private double pressure2;
    @Column(name="Strain_1", nullable = false)
    private double strain1;
    @Column(name="Strain_2")
    private double strain2;
    @Column(name = "Duration", nullable = false)
    private Time duration;
    @Column(name = "Speed", nullable = false)
    private double speed;
    @Column(name = "Milleage", nullable = false)
    private double milleage;

    public String getId(){return id;}
    public void setId(String id){this.id = id;}
    public double getPressure1(){return pressure1;}
    public void setPressure1(double pressure){this.pressure1 = pressure;}
    public double getPressure2(){return pressure2;}
    public void setPressure2(double pressure){this.pressure2 = pressure;}
    public double getStrain1(){return strain1;}
    public void setStrain1(double strain){this.strain1 = strain;}
    public double getStrain2(){return strain2;}
    public void setStrain2(double strain){this.strain2 = strain;}
    public Time getTime(){return duration;}
    public void setDuration(Time duration){this.duration = duration;}
    public double getSpeed(){return speed;}
    public void setSpeed(double speed){this.speed = speed;}
    public double getMilleage(){return milleage;}
    public void setMilleage(double milleage){this.milleage = milleage;}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Step step = (Step) o;
        return Double.compare(step.pressure1, pressure1) == 0 && Double.compare(step.pressure2, pressure2) == 0 && Double.compare(step.strain1, strain1) == 0 && Double.compare(step.strain2, strain2) == 0 && Double.compare(step.speed, speed) == 0 && Double.compare(step.milleage, milleage) == 0 && Objects.equals(id, step.id) && Objects.equals(duration, step.duration);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, pressure1, pressure2, strain1, strain2, duration, speed, milleage);
    }
}
