export interface Department {
  name?: string;
}

export interface DataSet {
  CourseId?: string;
  CourseName?: string;
  Department?: string;
  ValidApplications?: string;
  InvalidApplications?: string;
  PartialyValidApplications?: string;
  AllApplications?: string;
  type?: string;
  label?: string;
  value?: string;
}

export interface DataType {
  dataTypeName?: string;
  label?: string;
  dataSet?: DataSet[];
}

export interface DashboardDataModel {
  displayOrder?: string;
  facultyName?: string;
  departments?: Department[];
  dataTypes: DataType[];
}
