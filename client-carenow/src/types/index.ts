export type Formulir = {
  id: string;
  name: string;
  treatmentDate: string;
  treatmentDescription: "Flu" | "Covid-19" | "Headache" | "Stomachache";
  medicine: "Paracetamol" | "Amoxilin" | "Cetirizine" | "Dexamethasone";
  healthCosts: string;
};
