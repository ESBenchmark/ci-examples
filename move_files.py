from os import mkdir, rename

mkdir("dist")

rename("build/Release/napi.node", "dist/napi.node")
rename("index.node", "dist/napi-rs.node")
rename("pkg/echo.js", "dist/echo.js")
rename("pkg/echo_bg.wasm", "dist/echo_bg.wasm")
