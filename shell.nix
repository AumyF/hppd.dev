{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  nativeBuildInputs = [
    pkgs.starship
  ];
  buildInputs = [
    pkgs.nodejs-14_x
  ];
  shellHook = ''
    eval "$(starship init bash)"
    alias gatsby="npx gatsby"
  '';
}
