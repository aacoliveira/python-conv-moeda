from diagrams import Diagram
from diagrams.onprem.client import Client
from diagrams.programming.language import Python

with Diagram("Fluxo", show=False):
    curl_cliente = Client("Curl")
    app_python = Python("Aplicacao")

    curl_cliente >> app_python