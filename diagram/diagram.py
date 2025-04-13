#https://diagrams.mingrammer.com/docs/getting-started/examples

from diagrams import Diagram
from diagrams.onprem.client import Client
from diagrams.programming.language import Python
from diagrams.programming.framework import React

with Diagram("Fluxo", show=False):
    front = React("FrontEnd - React")
    backend = Python("Backend - Python")

    front >> backend