
import { useEffect, useState } from "react";
import { useCart } from "./context/CartContext";
import { Trash2, Plus, Minus, ArrowLeft, Leaf, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "./context/AuthContext";

export default function CartPage() {
  const { cart, loadCart, addQuantity, removeQuantity, removeFromCart } = useCart();
  const { user } = useAuth();

  const [confirmRemove, setConfirmRemove] = useState(null); // { id, name } ya null

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const items = cart || [];

  // Calculations
  const itemTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFeePerItem = items.map(item => {
    const itemSubtotal = item.price * item.quantity;
    return itemSubtotal >= 299 ? 0 : 29;
  });
  const totalDeliveryFee = deliveryFeePerItem.reduce((sum, fee) => sum + fee, 0);
  const toPay = itemTotal + totalDeliveryFee;

  const handleRemoveClick = (item) => {
    setConfirmRemove({ id: item.productId || item._id, name: item.name, unit: item.unit || "kg" });
  };

  const confirmRemoveItem = () => {
    if (confirmRemove) {
      removeFromCart(confirmRemove.id, confirmRemove.unit);
      setConfirmRemove(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-lime-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - same */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow hover:bg-white transition"
            >
              <ArrowLeft className="w-6 h-6 text-emerald-700" />
            </button>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-800">
                Your Fresh Basket
              </h1>
              <p className="text-sm text-emerald-600 mt-1 flex items-center gap-2">
                <Leaf size={16} className="text-emerald-500" />
                Farm-fresh • Organic • Delivered with care
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-emerald-100">
            <ShoppingBag className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold text-emerald-800">
              {items.length} {items.length === 1 ? "item" : "items"} • ₹{itemTotal.toFixed(2)}
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Cart Items */}
          <div className="lg:col-span-8 space-y-8">
            {/* Delivery Fee Banner - same */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Delivery Charges
                  </h4>
                  <p className="text-base text-gray-700 mt-1">
                    ₹29 per item • <span className="font-medium text-emerald-700">Free delivery on orders above ₹299</span>
                  </p>
                </div>

                <div className="text-right">
                  {totalDeliveryFee === 0 ? (
                    <div className="text-emerald-600">
                      <span className="text-2xl font-bold">FREE</span>
                      <span className="ml-3 text-sm font-medium bg-emerald-100 px-3 py-1 rounded-full">
                        Applied
                      </span>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold text-amber-700">
                      ₹{totalDeliveryFee}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <div className="px-4 space-y-4">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-28 px-8 text-center"
                >
                  <div className="text-9xl mb-8 opacity-70">🥬🍎</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-5">
                    Your basket is empty
                  </h2>
                  <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto">
                    Fill it with farm-fresh fruits & vegetables — straight from the field to your kitchen.
                  </p>
                  <button
                    onClick={() => window.history.back()}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    <ArrowLeft size={20} />
                    Browse Fresh Produce
                  </button>
                </motion.div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.productId || item._id}
                    className="flex gap-4 rounded-xl bg-white p-3 shadow-sm border border-slate-100"
                  >
                    {/* Image */}
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
                      <img
                        src={item.image || "https://via.placeholder.com/96?text=Item"}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-1 flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-slate-900 leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-xs text-slate-500 mt-1">
                            ₹{item.price.toFixed(2)} / {item.unit || "kg"}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveClick(item)}
                          className="text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      {/* Quantity + Remove */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 rounded-full bg-slate-50 p-1 border border-slate-100">
                          <button
                            onClick={() => removeQuantity(item.productId || item._id, item.unit || "kg")}
                            disabled={item.quantity <= 1}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-emerald-700 shadow-sm hover:bg-slate-100 disabled:opacity-50 transition"
                          >
                            <Minus size={18} />
                          </button>

                          {/* Animated Count */}
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={item.quantity}
                              initial={{ opacity: 0, scale: 0.8, y: -10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.8, y: 10 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="w-10 text-center text-base font-bold text-slate-900"
                            >
                              {item.quantity}
                            </motion.span>
                          </AnimatePresence>

                          <button
                            onClick={() => addQuantity(item.productId || item._id, item.unit || "kg")}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-white shadow-sm hover:bg-emerald-800 transition"
                          >
                            <Plus size={18} />
                          </button>
                        </div>

                        <p className="text-base font-bold text-emerald-700">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right: Order Summary (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6">
            <div className="bg-white rounded-3xl shadow-2xl border border-emerald-50 p-8">
              <h3 className="text-3xl font-bold text-emerald-800 mb-8 flex items-center gap-3">
                <span className="text-emerald-600">Order Summary</span>
              </h3>

              <div className="space-y-6 text-gray-800 text-lg">
                <div className="flex justify-between">
                  <span>Subtotal ({items.length} items)</span>
                  <span className="font-semibold">₹{itemTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-semibold">
                    {totalDeliveryFee === 0 ? (
                      <span className="text-emerald-600 font-bold">FREE</span>
                    ) : (
                      `₹${totalDeliveryFee}`
                    )}
                  </span>
                </div>

                <hr className="border-emerald-100 my-6" />

                <div className="flex justify-between text-3xl font-extrabold text-emerald-900">
                  <span>Grand Total</span>
                  <span>₹{toPay.toFixed(2)}</span>
                </div>
              </div>

              <button
                disabled={items.length === 0}
                className="mt-10 w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-600 hover:from-emerald-700 hover:via-emerald-600 hover:to-lime-700 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <ShoppingBag size={24} />
                Proceed to Checkout
              </button>

              <div className="mt-6 text-center text-sm text-emerald-700 font-medium">
                Secure Checkout • Cash on Delivery • Freshness Guaranteed
              </div>
            </div>

            {/* Delivery Info Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-2xl shadow-lg border border-emerald-100 p-7">
              <h4 className="font-bold text-xl text-emerald-800 mb-5 flex items-center gap-2">
                <Leaf className="text-emerald-600" size={24} />
                Delivery Information
              </h4>
              <div className="space-y-4 text-base text-emerald-800">
                <p className="flex items-start gap-3">
                  <span className="text-emerald-600 text-2xl mt-0.5">✓</span>
                  <span>Fast delivery in Indore (24-48 hours)</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-600 text-2xl mt-0.5">✓</span>
                  <span>₹29 delivery charge per item</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-600 text-2xl mt-0.5">✓</span>
                  <span>Free delivery on orders above ₹299</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-emerald-600 text-2xl mt-0.5">✓</span>
                  <span>100% fresh & organic produce guaranteed</span>
                </p>
              </div>

              <button className="mt-6 w-full text-center text-emerald-700 hover:text-emerald-800 text-base font-medium transition flex items-center justify-center gap-2">
                Change Delivery Address →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating Checkout */}
      {items.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-emerald-100 shadow-2xl p-5 z-50 md:hidden">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-2xl font-bold text-emerald-900">
                ₹{toPay.toFixed(2)}
              </p>
              <p className="text-sm text-emerald-700">
                {items.length} item{items.length !== 1 && "s"} • ₹{totalDeliveryFee} delivery
              </p>
            </div>
            <button
              disabled={items.length === 0}
              className="bg-gradient-to-r from-emerald-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg transition disabled:opacity-50"
            >
              Checkout Now
            </button>
          </div>
        </div>
      )}

      {/* Remove Confirmation Modal */}
      <AnimatePresence>
        {confirmRemove && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setConfirmRemove(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    Remove Item
                  </h3>
                  <button
                    onClick={() => setConfirmRemove(null)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className="text-slate-600 mb-6">
                  Are you sure you want to remove <span className="font-semibold text-slate-900">{confirmRemove.name}</span> from your cart?
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setConfirmRemove(null)}
                    className="flex-1 py-3 px-4 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmRemoveItem}
                    className="flex-1 py-3 px-4 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}