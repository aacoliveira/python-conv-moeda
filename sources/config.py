from prometheus_client import (
    Counter, 
    platform_collector, 
    process_collector, 
    gc_collector, 
    CollectorRegistry, 
    disable_created_metrics,
)

def configurar_metricas():
    registry = CollectorRegistry()
    gc_collector.GCCollector(registry=registry)
    platform_collector.PlatformCollector(registry=registry)
    process_collector.ProcessCollector(registry=registry)
    disable_created_metrics()

    http_requests_total = Counter(
        "http_requests_total",
        "Total number of HTTP requests received",
        ["status", "path", "method"],
        registry=registry,
    )

    return registry, http_requests_total