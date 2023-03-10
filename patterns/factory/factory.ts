interface IInsurance {
  id: string;
  status: string;
  setVehicle(vehicle: any): void;
  submit(): Promise<Boolean>;
}

class TFInsurance implements IInsurance {
  id: string;
  status: string;
  private vehicle: any;
  setVehicle(newVehicle: any): void {
    this.vehicle = newVehicle;
  }
  async submit(): Promise<Boolean> {
    return Promise.resolve(true);
  }
}

class ABInsurance implements IInsurance {
  id: string;
  status: string;
  private vehicle: any;
  setVehicle(newVehicle: any): void {
    this.setV(newVehicle)
  }
  async submit(): Promise<Boolean> {
    return Promise.resolve(true);
  }
  get getV() {
    return this.vehicle;
  }

  set setV(vehicle: any) {
    this.vehicle = vehicle;
  }
}


abstract class InsuranceFactory{
     db =  []
    abstract  createInsurance():IInsurance

    saveHistory(ins:IInsurance):void{
        this.db.push(ins)
    }
}

class TFInsuranceFactory extends InsuranceFactory{
    createInsurance(): TFInsurance {
        return new TFInsurance()
    }
}
class ABInsuranceFactory extends InsuranceFactory{
    createInsurance(): ABInsurance {
        return new ABInsurance()
    }
}

const tfInsuranceFactory = new TFInsuranceFactory()
const ins = tfInsuranceFactory.createInsurance()

const abInsuranceFactorry = new ABInsuranceFactory()
const abs = abInsuranceFactorry.createInsurance()



tfInsuranceFactory.saveHistory(ins)
tfInsuranceFactory.saveHistory(abs)


console.log(tfInsuranceFactory.db)





