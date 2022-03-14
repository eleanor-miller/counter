export type Project = {
  projectId: Number;
  projectName: String;
  photoUrl: String;
  startDate: Date;
  endDate: Date;
  yarnBrand: String;
  yarnWeight: String;
  yarnColorway: String;
  yarnDyeLot: String;
  yarnFavorite: Boolean;
  projectNotes: String;
};

export type User = {
  userId: Number;
  username: String;
  email: String;
  password: String;
};
