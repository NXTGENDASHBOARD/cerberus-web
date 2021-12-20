import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material";
import { MDBAngularModule } from "./mdb-angular";


// Exports modules
export const SHARED_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, MDBAngularModule];