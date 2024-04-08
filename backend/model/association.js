import Appointment from "./appointment.model.js";
import Cart from "./cart.model.js";
import CartItems from "./cartitems.model.js";
import Category from "./category.model.js";
import Doctor from "./doctor.model.js";
import DoctorDetail from "./doctordetail.model.js";
import HomeRemedy from "./homeremedy.model.js";
import Order from "./order.model.js";
import orderItem from "./orderitems.model.js";
import Product from "./product.model.js";
import User from "./user.model.js";
import Yoga from "./yoga.model.js";
console.log("Association Executed.......");

//category
Category.hasMany(Product, { foreignKey: "categoryname", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Product.belongsTo(Category, { foreignKey: "categoryname", targetKey: "categoryName", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Category.hasMany(HomeRemedy, { foreignKey: "categoryname", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
HomeRemedy.belongsTo(Category, { foreignKey: "categoryname", targetKey: "categoryName", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Category.hasMany(Yoga, { foreignKey: "categoryname", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Yoga.belongsTo(Category, { foreignKey: "categoryname", targetKey: "categoryName", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// order
Order.hasMany(orderItem, { foreignKey: "id", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
orderItem.belongsTo(Order, { foreignKey: "orderId", targetKey: "id", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// product
Order.hasMany(Product, { foreignKey: "id", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Product.belongsTo(Order, { foreignKey: "productId", targetKey: "id", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// product
Product.hasMany(orderItem, { foreignKey: "id", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
orderItem.belongsTo(Product, { foreignKey: "productId", targetKey: "id", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// user
User.hasMany(Order, { foreignKey: "id", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Order.belongsTo(User, { foreignKey: "userId", targetKey: "id", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// appointment
Doctor.hasMany(Appointment, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Appointment.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })

User.hasMany(Appointment, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Appointment.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })

// doctordetails
Doctor.hasOne(DoctorDetail, { foreignKey: "id", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
DoctorDetail.belongsTo(Doctor, { foreignKey: "doctorId", targetKey: "id", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

User.hasOne(Cart, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Cart.belongsTo(User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Cart.belongsToMany(Product, { through: CartItems }, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Product.belongsToMany(Cart, { through: CartItems }, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });

export { Category, Product, User, Cart, CartItems, HomeRemedy, Yoga, Doctor, DoctorDetail, Order, orderItem, Appointment };