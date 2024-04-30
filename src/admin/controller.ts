import { BadRequestError } from "../utils/customErrors";
import AdminService from "./service";

export default class AdminController {
	private service: AdminService;

	constructor() {
		this.service = new AdminService();
	}
}