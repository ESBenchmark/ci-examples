#[cfg(feature = "wasm")]
use wasm_bindgen::prelude::*;

#[cfg(feature = "wasm")]
#[wasm_bindgen]
pub fn run_callback(callback: &js_sys::Function) -> JsValue {
	return callback.call0(&JsValue::null()).unwrap();
}

#[cfg(feature = "napi")]
use napi::bindgen_prelude::*;
#[cfg(feature = "napi")]
use napi_derive::napi;

#[cfg(feature = "napi")]
#[napi]
pub fn run_callback(callback: JsFunction) -> String {
	return callback.call0().unwrap();
}
