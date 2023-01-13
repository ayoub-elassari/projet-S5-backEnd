package com.example.payload.request;

import javax.validation.constraints.*;
import java.util.Set;

public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  private Set<String> role;

  private String tele;

  private String ville;

  private String sport;

  private String facebook;
  private String instagram;

  @NotBlank
  @Size(min = 6, max = 40)
  private String password;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<String> getRole() {
    return this.role;
  }

  public void setRole(Set<String> role) {
    this.role = role;
  }

  public String getTele() {
    return tele;
  }

  public void setTele(String tele) {
    this.tele = tele;
  }

  public String getVille() {
    return ville;
  }

  public void setVille(String ville) {
    this.ville = ville;
  }

  public String getSport() {
    return sport;
  }

  public void setSport(String sport) {
    this.sport = sport;
  }

  public String getFacebook() {
    return facebook;
  }

  public void setFacebook(String facebook) {
    this.facebook = facebook;
  }

  public String getInstagram() {
    return instagram;
  }

  public void setInstagram(String instagram) {
    this.instagram = instagram;
  }

  @Override
  public String toString() {
    return "SignupRequest{" +
            "username='" + username + '\'' +
            ", email='" + email + '\'' +
            ", role=" + role +
            ", tele='" + tele + '\'' +
            ", ville='" + ville + '\'' +
            ", sport='" + sport + '\'' +
            ", facebook='" + facebook + '\'' +
            ", instagram='" + instagram + '\'' +
            ", password='" + password + '\'' +
            '}';
  }
}
