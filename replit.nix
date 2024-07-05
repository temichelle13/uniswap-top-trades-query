{pkgs}: {
  deps = [
    pkgs.nodePackages_latest.npm
    pkgs.graphql-client
    pkgs.nodePackages_latest.graphql
    pkgs.nodePackages.graphql
    pkgs.graphicsmagick
    pkgs.nodePackages.graphql-cli
    pkgs.nodejs_latest
    pkgs.nodePackages.nodejs
    pkgs.nodePackages_latest.nodejs
  ];
}
