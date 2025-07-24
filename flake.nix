{
  description = "Learning Angular 2";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
    gitignore = {
      url = "github:hercules-ci/gitignore.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs@{ flake-parts, gitignore, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin" ];
      perSystem = { config, self', inputs', pkgs, system, ... }: {
        packages.default = pkgs.stdenv.mkDerivation {
          pname = "nglearn";
          version = "0.0.0";

          src = gitignore.lib.gitignoreSource ./.;

          yarnOfflineCache = pkgs.fetchYarnDeps {
            yarnLock = ./yarn.lock;
            hash = "sha256-L/0WeJxR/KIY5fV5AKSutnzkvnOC4ZtkSCcedZo2Ijw=";
          };

          nativeBuildInputs = [
            pkgs.yarnConfigHook
            pkgs.yarnBuildHook
            pkgs.yarnInstallHook
            pkgs.nodejs
            pkgs.yarn
          ];

          dontYarnInstall = true;

          installPhase = ''
            mkdir $out
            cp -r dist/nglearn/browser/* $out
          '';
        };

        devShells.default = pkgs.mkShell {
          yarnOfflineCache = pkgs.fetchYarnDeps {
            yarnLock = ./yarn.lock;
            hash = "sha256-L/0WeJxR/KIY5fV5AKSutnzkvnOC4ZtkSCcedZo2Ijw=";
          };

          buildInputs = with pkgs; [ nodejs yarn ];
          nativeBuildInputs = [ pkgs.yarnConfigHook ];

          shellHook = "yarn install";
        };
      };
    };
}
