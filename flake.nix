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
        packages.default = pkgs.buildNpmPackage {
          name = "nglearn";

          src = gitignore.lib.gitignoreSource ./.;

          npmDepsHash = "sha256-YVMHGR/BHSynHRAtCM0TsuJQwjJS4JQMCwRUWWxT5eo=";
          npmBuildScript = "build";

          installPhase = ''
              runHook preInstall
              mkdir $out
              cp -r dist/nglearn/browser/* $out
              runHook postInstall
            '';
        };

        devShells.default = pkgs.mkShell {
          packages = [ pkgs.importNpmLock.hooks.linkNodeModulesHook ];

          npmDeps = pkgs.importNpmLock.buildNodeModules {
            npmRoot = ./.;
            nodejs = pkgs.nodejs;
          };

          buildInputs = with pkgs; [ nodejs ];
        };
      };
    };
}
